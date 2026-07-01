import Image from "next/image";

type BismillahBannerProps = {
    activeTab?: string;
};

export default function BismillahBanner({ activeTab }: BismillahBannerProps) {
    return (
        <div
            className="relative flex w-full h-[158px] items-center justify-center overflow-hidden aspect-8/1"
            style={{
                background: "linear-gradient(90deg, #FCB541 0%, #FA9E3D 45%, #F7922A 100%)",
            }}
        >
            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="
      M0 120
      L0 95
      C250 95, 500 95, 700 88
      C830 82, 920 70, 1000 78
      L1000 120
      Z
    "
                    fill="rgba(255,255,255,0.08)"
                />
            </svg>

            <div className="relative z-10 w-[35%] min-w-[160px]">
                {activeTab ? (
                    <h2 className="text-center text-4xl font-semibold text-white">
                        {activeTab}
                    </h2>
                ) : (
                    <Image
                        src="assets/bismillah.svg"
                        alt="Bismillah ar-Rahman ar-Rahim"
                        width={391}
                        height={65}
                        className="h-auto w-full"
                        priority
                    />
                )}
            </div>
        </div>
    );
}