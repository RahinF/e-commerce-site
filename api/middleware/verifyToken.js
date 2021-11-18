import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) res.status(403).json("Token is not valid.");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated.");
  }
};

export const verifyTokenAndAuthorisation = (req, res, next) => {
  verifyToken(req, res, () => {

    if (req.user.id === req.params._id || req.user.isAdmin) {
      next(); // if user is correct or if admin continue
    } else {
      res
        .status(403)
        .json("You do not have authorisation to execute this action.");
    }
  });
};


export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next(); // if user is admin continue
      } else {
        res
          .status(403)
          .json("You do not have authorisation to execute this action.");
      }
    });
  };
