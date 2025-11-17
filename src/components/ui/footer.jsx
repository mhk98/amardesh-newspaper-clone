export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bengali text-xl font-bold mb-4">GIZA NEWS  24 online</h3>
            <p className="font-bengali text-gray-400 text-sm">Your Trusted News Paper</p>
          </div>
          <div>
            <h4 className="font-bengali font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 font-bengali text-sm text-gray-400">
              <li><a href="/category/national" className="hover:text-white">National</a></li>
              <li><a href="/category/international" className="hover:text-white">International</a></li>
              <li><a href="/category/sports" className="hover:text-white">Sports</a></li>
              <li><a href="/category/entertainment" className="hover:text-white">Entertainment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bengali font-semibold mb-4">Related</h4>
            <ul className="space-y-2 font-bengali text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bengali font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center font-bengali text-sm text-gray-400">
          <p>© 2024 GIZA NEWS  24 online। All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


