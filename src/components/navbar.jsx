const Navbar = () => {
  const categories = [
    { name: 'Combos & Deals', icon: '/images/sack2.jpg' },
    { name: 'Rice & Cereals', icon: '/images/sack3.jpg' },
    { name: 'Flours & Suji', icon: '/images/sack2.jpg' },
    { name: 'Oil & Ghee', icon: '/images/sack3.jpg' },
    { name: 'Teas & Coffee', icon: '/images/sack2.jpg' },
    { name: 'Spices & Masalas', icon: '/images/sack3.jpg' },
    { name: 'Raw Honey', icon: '/images/sack2.jpg' },
    { name: 'Salts, Sugar & Jaggery', icon: '/images/sack3.jpg' },
    { name: 'Dry Fruits & Nuts', icon: '/images/sack2.jpg' },
    { name: 'Health Seeds', icon: '/images/sack3.jpg' }
  ];

  return (
    <nav className="bg-green-50 shadow-sm border-t border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center space-x-8 overflow-x-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center space-x-2 text-green-900 hover:text-green-700 cursor-pointer transition"
          >
            <img src={cat.icon} alt={cat.name} className="w-10 h-10" />
            <span className="text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
