
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  console.log(props.color);
  
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
      <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
      <div>
        <p className=' text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus fuga possimus excepturi sequi illo!</p>
        <div className='flex justify-between'>
          <button style={{background:props.color}} className=' text-white font-medium px-8 py-2 rounded-full text'> {props.tag}</button>
          <button className='inline-flex items-center gap-2 leading-none bg-blue-600 text-white font-medium px-3 py-2 rounded-full'> <ArrowRight size={16} className="relative top-[1px]" /></button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent