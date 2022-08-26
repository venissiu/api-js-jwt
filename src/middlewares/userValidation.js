const Joi = require('joi');

const userJoi = Joi.object({
    displayName: Joi.string().min(8).required().messages({
        'any.required': '400/"displayName" is required',
        'string.min': '400/"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .message({
        'any.invalid': '400/"email" must be a valid email', 
        }),
    password: Joi.string().min(6).required().messages({
        'any.required': '400/"password" is required',
        'string.min': '400/"password" length must be at least 6 characters long',
      }),
      image: Joi.string(),
        
  });
const userValidation = (sale) => {
  const isValid = userJoi.validate(sale);

  return isValid;
};
const userMiddleware = (request, response, next) => {
  const newUserInformation = request.body;
  const { error } = userValidation(newUserInformation);
  if (error) { 
    const [code, message] = error.message.split('/');
    if (!message) {
      return response.status(400).json({ message: code });
    }
    return response.status(code).json({ message });
  }
  next();
};

module.exports = { userMiddleware };