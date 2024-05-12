import{ validationResult } from 'express-validator'; // Assuming you're using express-validator for validation

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Return validation errors as JSON
  }
  next(); // If no errors, proceed to the next middleware or route handler
};

module.exports = {
  handleValidationErrors, // Export the middleware function for use in controllers
};
