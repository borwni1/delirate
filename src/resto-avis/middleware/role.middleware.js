function requireRole(expectedRole) {
  return (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (user.role !== expectedRole) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
}

module.exports = { requireRole };