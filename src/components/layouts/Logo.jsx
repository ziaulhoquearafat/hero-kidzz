import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image
        alt="Hero Kidzz Logo"
        src="/assets/logo.png"
        width={50}
        height={40}
      />
      <h2 className="text-xl font-bold">Hero Kidzz</h2>
    </div>
  );
};

export default Logo;
