import Image from "next/image";

function FeaturedProducts() {
  return (
    <div className="bg-white min-h-screen">
      <div className="text-center text-5xl relative top-12 text-black font-bold font-serif text-4xl md:text-5xl lg:text-6xl">
        Featured Products
      </div>
      <div className="flex flex-wrap justify-center gap-9 mt-9 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-center rounded-lg">
          <div>
            <Image
              className="rounded-lg"
              src="/Feature_image_Liq.png"
              width={200}
              height={200}
            />
          </div>
          <div className="font-bold text-center pt-3">599</div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 border border-black text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
            <button className="bg-green-500 border border-black text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>

        <div className="text-center rounded-lg">
          <div>
            <Image
              className="rounded-lg"
              src="/Feature_image_Liq.png"
              width={200}
              height={200}
            />
          </div>
          <div className="font-bold text-center pt-3">599</div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 border border-black text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
            <button className="bg-green-500 border border-black text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>

        <div className="text-center rounded-lg">
          <div>
            <Image
              className="rounded-lg"
              src="/Feature_image_Liq.png"
              width={200}
              height={200}
            />
          </div>
          <div className="font-bold text-center pt-3">599</div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 border border-black text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
            <button className="bg-green-500 border border-black text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>

        <div className="text-center rounded-lg">
          <div>
            <Image
              className="rounded-lg"
              src="/Feature_image_Liq.png"
              width={200}
              height={200}
            />
          </div>
          <div className="font-bold text-center pt-3">599</div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 border border-black text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
            <button className="bg-green-500 border border-black text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
        {/* Repeat the above structure for each product card */}
        {/* ... */}
      </div>
    </div>
  );
}

export default FeaturedProducts;
