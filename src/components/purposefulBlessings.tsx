import { Button } from "antd";
import { Amiri, Inter } from "next/font/google";
import Image from "next/image";
// Arabic display font for the dua text
const amiri = Amiri({
    subsets: ["arabic"],
    weight: ["400", "700"],
    variable: "--font-amiri",
});

// Body font for the title / translation
const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

export default function PurposefulBlessings() {
    return (
        <div>
            <div
                className={`${inter.variable} ${amiri.variable} font-sans max-w-3xl rounded-2xl border border-amber-200/70 bg-[#FFFBF0] p-6 shadow-sm`}
            >
                {/* Title */}
                <h2 className="mb-5 text-lg font-semibold text-gray-900">
                    Purposeful Blessings
                </h2>

                {/* Icon + Arabic text */}
                <div className="flex items-start gap-4">
                    <Image
                        src="assets/hands.svg" // or "/assets/hands.svg"
                        alt="Raised hands"
                        width={40}
                        height={40}
                        className="shrink-0 mt-1"
                    />

                    <p
                        dir="rtl"
                        lang="ar"
                        className="flex-1 text-right text-2xl leading-loose text-gray-900"
                        style={{ fontFamily: "var(--font-amiri)" }}
                    >
                        اللَّهُمَّ ارْزُقْنِي حُبَّكَ وَحُبَّ مَنْ يَنْفَعُنِي حُبُّهُ عِنْدَكَ اللَّهُمَّ مَا رَزَقْتَنِي مِمَّا أُحِبُّ فَاجْعَلْهُ قُوَّةً لِي فِيمَا تُحِبُّ اللَّهُمَّ وَمَا زَوَيْتَ عَنِّي مِمَّا أُحِبُّ فَاجْعَلْهُ لِي فَرَاغًا فِيمَا تُحِبُّ
                    </p>
                </div>

                {/* Divider */}
                <hr className="my-4 border-amber-200/70" />

                {/* Translation */}
                <p className="text-sm leading-relaxed text-gray-500">
                    O Allah grant me Your love and the love of those whose love will
                    benefit me with You. O Allah, whatever you have provided me of that
                    which I love, then make it strength for me for that which You love.
                    O Allah, and what you have kept from me of that which I love, then
                    make it for me a period of rest in that which You love.
                </p>
            </div>
            <div className="flex justify-end items-center gap-3 pt-4">

                <Button
                    icon={
                        <Image
                            src="/assets/recycle.svg"
                            alt="retake"
                            width={18}
                            height={18}
                        />
                    }
                    className="
    !bg-[#FF6633]
    !text-white
    !border-none
    !rounded-md
    !h-[40px]
    !px-6
    !font-medium
    hover:!bg-[#E85B2F]
    hover:!text-white
    !flex !items-center
  "
                >
                    Retake
                </Button>

                <Button
                    className="
      !bg-[#FFB81C]
      !text-white
      !border-none
      !rounded-md
      !h-[40px]
      !px-6
      !font-medium
      hover:!bg-[#E6A300]
      hover:!text-white
    "
                >
                    Memorised
                </Button>

                <Button
                    className="
      !bg-[#00D900]
      !text-white
      !border-none
      !rounded-md
      !h-[40px]
      !px-6
      !font-medium
      hover:!bg-[#00BF00]
      hover:!text-white
    "
                >
                    Complete
                </Button>

            </div>
        </div>
    );
}