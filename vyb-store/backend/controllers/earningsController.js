exports.calculateEarnings = (req, res) => {
    const { followers, products } = req.body;
  
    if (!followers || !products) {
      return res.status(400).json({ error: 'Followers and products are required' });
    }
  
    const earnings = (followers / 10000) * (products * 1000);
    res.json({ earnings });
  };
  