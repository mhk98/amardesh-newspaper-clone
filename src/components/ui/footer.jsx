export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bengali text-xl font-bold mb-4">আমার দেশ</h3>
            <p className="font-bengali text-gray-400 text-sm">আপনার বিশ্বস্ত সংবাদ মাধ্যম</p>
          </div>
          <div>
            <h4 className="font-bengali font-semibold mb-4">ক্যাটাগরি</h4>
            <ul className="space-y-2 font-bengali text-sm text-gray-400">
              <li><a href="/category/national" className="hover:text-white">জাতীয়</a></li>
              <li><a href="/category/international" className="hover:text-white">আন্তর্জাতিক</a></li>
              <li><a href="/category/sports" className="hover:text-white">খেলাধুলা</a></li>
              <li><a href="/category/entertainment" className="hover:text-white">বিনোদন</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bengali font-semibold mb-4">সম্পর্কিত</h4>
            <ul className="space-y-2 font-bengali text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-white">যোগাযোগ</a></li>
              <li><a href="#" className="hover:text-white">গোপনীয়তা নীতি</a></li>
              <li><a href="#" className="hover:text-white">শর্তাবলী</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bengali font-semibold mb-4">সামাজিক মাধ্যম</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center font-bengali text-sm text-gray-400">
          <p>© ২০২৪ আমার দেশ। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}


