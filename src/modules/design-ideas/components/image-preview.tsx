import laptop from "@/assets/laptop.png";
import people from "@/assets/people.png";
import store from "@/assets/store.png";

const ImagePreview = () => {
  return (
    <div className="flex flex-col items-center p-4 w-1/2">
      <div className="flex justify-center p-4">
        <img
          src={laptop}
          alt="Laptop and Book"
          className="w-96 h-56 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex justify-center">
          <img
            src={people}
            alt="Person"
            className="w-48 h-24 object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={store}
            alt="Cafe"
            className="w-48 h-24 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
