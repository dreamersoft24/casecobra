import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice=(price:number )=>{
  const formmater=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',

  })
return formmater.format(price)
}


export function constructMetadata({
  title='CaseCobra - custom high-quality phone cases',
  description='Create cusotm hight-quality phone cases in sceonds',
  image="/thumbnail.png",
  icons='/favicon.ico',

}:{
  title?:string,
  description?:string,
  image?:string,
  icons?:string
}={}):Metadata {
  return {
    title,
    description,
    openGraph:{
      title,
      description,
      images:[{url:image}]
    },
    twitter:{
      card:'summary_large_image',
      title,
      description,
      images:[image],
      creator:'@Aizaz Jahangir',

    },
    icons,
    metadataBase:new URL('https://casecobra-ten-xi.vercel.app')
  }
}