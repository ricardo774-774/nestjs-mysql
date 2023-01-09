import { Injectable } from '@nestjs/common';
import { 
  AuthenticationDetails,
  CognitoUser, 
  CognitoUserAttribute, 
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import { 
  ChangePassword, 
  ConfirmUserDTO, 
  SignInDTO, 
  ResendTokenDTO, 
  RestorePassword, 
  SignUpDTO,
} from './dto/auths.dto';

export const poolData = {     
  UserPoolId : 'us-east-1_xGTpInCTQ', 
  ClientId : '1769ot9ngqq2lmf9cm4e1bnbcb',
  pool_region : 'us-east-1'
};

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthsService {
  
  async registerUser({
    username,
    email,
    password,
  }: SignUpDTO): Promise<{}> {

    var attributeList = [];
      attributeList.push(new CognitoUserAttribute({
        Name:"name",
        Value: username,
      }));
      attributeList.push(new CognitoUserAttribute({
        Name:"email",
        Value: email,
      }));

    return new Promise((resolve, reject) => {
      return userPool.signUp(
        username, 
        password, 
        attributeList, 
        null, 
        (err,result) => {
          if (err) {
            console.log('Wrong Process: ',err);
            reject(err);
          } else {
            const cognitoUser = result.user.getUsername();
            console.log('Successful Process');
            resolve(cognitoUser);
          }
        }
      );
    });
  }

  async confirmUser({
    username,
    verificationCode,
  }: ConfirmUserDTO): Promise<{}> {

    var userData = {
      Username: username,
      Pool: userPool,
    };

    return new Promise((resolve, reject) => {
      var cognitoUser = new CognitoUser(userData);
      return cognitoUser.confirmRegistration(
        String(verificationCode), 
        true, 
        (err, result) => {
          if (err) {
            console.log('Wrong Process');
            reject(err)
          } else {
            console.log('Process:',result);
            resolve(cognitoUser.getUsername());
          }
        });
    })
  }

  async accessUser({
    username,
    password
  }: SignInDTO): Promise<{}> {
      var authenticationDetails = new AuthenticationDetails({
          Username : username,
          Password : password,
      });
  
      var userData = {
          Username : username,
          Pool : userPool
      };

      return new Promise((resolve, reject) => {
        const cognitoUser = new CognitoUser(userData);
        return cognitoUser.authenticateUser(
          authenticationDetails,
          {
            onSuccess: (result) => {
              console.log('Correct access');
              return resolve(result);
            },
            onFailure: (err) => {
              console.log('Access denied');
              return reject(err);
            },
          }
        );
      });
  }

  async resendToken({
    username
  }: ResendTokenDTO): Promise<{}> {

    var userData = {
      Username: username,
      Pool: userPool
    };
    
    return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser(userData);
      return cognitoUser.resendConfirmationCode(
        (err,result) => {
          if(err){
            console.log('Wrong Process:', err);
            return reject(err);
          } else {
            console.log('Successful Process');
            return resolve(result);
          }
        });
    })
  }

  async changePassword({
    username,
    password,
    newPassword
  }: ChangePassword): Promise<{}> {
    
    var authenticationDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
    });
    
    var userData = {
      Username: username,
      Pool: userPool
    };
    
    return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser(userData);
      return cognitoUser.authenticateUser(
        authenticationDetails, 
        {
          onSuccess: (result) => {
            cognitoUser.changePassword(
              password, 
              newPassword, 
              () => {
                console.log('Successful Process');
                return resolve(result);
              });
          },
          onFailure: (err) => {
            console.log('Wrong Process: ',err);
            return reject(err);
          },
        }
      );
    });
  }

  async restorePassword({
    username
  }: RestorePassword): Promise<{}> {

    var userData = {
        Username: username,
        Pool: userPool
    };
    
    return new Promise((resolve, reject) => {
      var cognitoUser = new CognitoUser(userData);
      return cognitoUser.forgotPassword({
        onSuccess: (result) => {
          console.log('Successful Process');
          return resolve(result);
        },
        onFailure: (err) => {
          console.log('Wrong Process: ',err);
          return reject(err);
        },
      });
    })
  }
}