import Image from 'next/image';

interface GiftCardProps {
  value: number;
  valueText: string;
  thaiText: string;
  imageUrl: string;
  dataAiHint: string;
  isPrimary?: boolean;
}

const LifeStoreLogo = () => (
    <div className="flex items-center gap-2">
        <div className="text-4xl font-bold italic">M</div>
        <div className="flex flex-col justify-center">
            <span className="text-lg font-bold leading-none">LifeStore</span>
        </div>
    </div>
);

export function GiftCard({ value, valueText, thaiText, imageUrl, dataAiHint, isPrimary = false }: GiftCardProps) {
  return (
    <div className="relative w-full aspect-[3/1.9] rounded-2xl overflow-hidden shadow-lg text-white font-sans">
      <Image
        src={imageUrl}
        alt={`Gift card for ${value}`}
        fill
        objectFit="cover"
        className="z-0"
        data-ai-hint={dataAiHint}
      />
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="relative z-20 p-6 pb-9 flex flex-col justify-between h-full">
        <div className="text-right">
          <p className="font-light tracking-widest text-sm">GIFT CARD</p>
        </div>
        
        <div className="flex-grow flex flex-col justify-center items-center -mt-8">
            <p className="text-8xl font-thin tracking-tighter">{value}</p>
            <div className="text-center -mt-2">
              <p className="text-xs tracking-wider">{valueText}</p>
              <p className="text-xs">{thaiText}</p>
            </div>
        </div>

        <div className="self-start">
            <LifeStoreLogo />
        </div>
      </div>
      {isPrimary && (
         <div className="absolute top-0 right-0 w-16 h-16 z-20 overflow-hidden">
            <div className="absolute transform rotate-45 bg-red-600 flex justify-center items-center text-white font-semibold right-[-34px] top-[16px] w-[90px]">
                <span className="text-2xl mt-1">*</span>
            </div>
         </div>
      )}
    </div>
  );
}
