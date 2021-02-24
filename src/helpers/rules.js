export const passwordRule = [
    {
        required: true,
        message: 'Please input your password!',
    },
    () => ({
        validator(rule, value) {
            if (value.length > 0 && value.length < 8) {
                return Promise.reject('password must be at least 8 characters !');
            } else {
                return Promise.resolve();
            }
        },
    })
];
