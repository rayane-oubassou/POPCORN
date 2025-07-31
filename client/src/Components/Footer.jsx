import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <img alt="" class="h-30" src={assets.logo} />
                    <p className="mt-6 text-sm">
                    Popcorn is your ultimate destination for discovering, watching, and celebrating 
                    cinema. From the latest blockbusters to hidden indie gems, we bring movie lovers a seamless, 
                    immersive experience — anytime, anywhere. Whether you're booking tickets, exploring trailers, or 
                    curating your favorites, Popcorn makes every moment at the movies unforgettable.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                        <img src={assets.googlePlay} className="h-9 w-auto " />
                        <img src={assets.appStore} alt="app store" className="h-9 w-auto " />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+212-50483442</p>
                            <p>popcorncompany@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://www.linkedin.com/in/rayane-oubassou-9044b9275/">Rayane Oubassou</a>. All Right Reserved.
            </p>
        </footer>
      </div>
  )
}

export default Footer