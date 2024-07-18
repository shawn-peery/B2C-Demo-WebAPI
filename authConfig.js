const passportConfig = {
    credentials: {
        tenantName: 'shawnpeeryb2c.onmicrosoft.com',
        clientID: '2f135ed1-fd85-4ea3-956a-0e5ee71a2957',
    },
    policies: {
        policyName: 'B2C_1_signupsignin1',
    },
    metadata: {
        b2cDomain: 'shawnpeeryb2c.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        microservicesapi: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['Todos.Read'],
                write: ['Todos.Write'],
            },
        },
    },
};

module.exports = passportConfig;

