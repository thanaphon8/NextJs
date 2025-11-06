import { ShoppingCart, User, Search, Heart, Menu, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopHub
              </h1>
            </div>
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="ค้นหาสินค้า..."
                  className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#products" className="text-gray-700 hover:text-purple-600 font-medium">สินค้า</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium">เกี่ยวกับเรา</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium">ติดต่อเรา</a>
              <button className="relative">
                <Heart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
              </button>
              <User className="h-6 w-6" />
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              ช้อปสินค้าคุณภาพ
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ในราคาพิเศษ
              </span>
            </h2>
            <p className="text-xl text-gray-600">สินค้าหลากหลายหมวดหมู่ คัดสรรมาเพื่อคุณ</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
                เริ่มช้อปเลย
              </button>
              <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold border-2 border-purple-600">
                ดูสินค้าทั้งหมด
              </button>
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl shadow-2xl"></div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">ติดต่อเรา</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <Phone className="h-12 w-12" />
              <h3 className="text-xl font-semibold">โทรศัพท์</h3>
              <p>02-XXX-XXXX</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Mail className="h-12 w-12" />
              <h3 className="text-xl font-semibold">อีเมล</h3>
              <p>contact@shophub.com</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <MapPin className="h-12 w-12" />
              <h3 className="text-xl font-semibold">ที่อยู่</h3>
              <p>กรุงเทพมหานคร</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}