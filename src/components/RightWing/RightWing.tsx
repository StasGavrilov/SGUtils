import { useOutsideClick } from '../../helpers/useOutsideClick'
import Box from "../Box/Box"
import { useForm } from "react-hook-form"

interface IRightWing {
    isOpen: boolean
    closeWing: () => void
    handleSubmit: (formData: Record<string, any>) => void
    title: string
}

export default function RightWing({ title, isOpen, closeWing, handleSubmit }: IRightWing) {
    const ref = useOutsideClick(closeWing)
    const { register, handleSubmit: handleFormSubmit, reset } = useForm()

    const onSubmit = (data: any) => {
        handleSubmit(data)
        reset()
    }

    return (
        <div ref={ref} className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0 w-[45%]' : 'translate-x-full'} transition-transform duration-300`}>
            <button onClick={closeWing} className="p-2 absolute right-3 top-3 rounded-full w-6 h-6 flex justify-center items-center">X</button>

            <Box title={title}>
                <form onSubmit={handleFormSubmit(onSubmit)} className="flex flex-col space-y-4 w-[250px]">
                    <input {...register('bulk_cut')} placeholder="מסה/חיטוב" className="input-field" />
                    <input {...register('weight')} type="number" step="0.1" placeholder="משקל" className="input-field" />
                    <input {...register('neck_scope')} type="number" step="0.1" placeholder="היקף צוואר" className="input-field" />
                    <input {...register('bust')} type="number" step="0.1" placeholder="היקף חזה" className="input-field" />
                    <input {...register('waist_circumference_navel')} type="number" step="0.1" placeholder="היקף מותניים (טבור)" className="input-field" />
                    <input {...register('supreme_court_scope_in_the_contraction')} type="number" step="0.1" placeholder="היקף ירך עליון בכיווץ" className="input-field" />
                    <input {...register('underwear_in_the_contraction')} type="number" step="0.1" placeholder="היקף ירך תחתון בכיווץ" className="input-field" />
                    <input {...register('front_hand_volume_in_the_contraction')} type="number" step="0.1" placeholder="היקף יד קדמית בכיווץ" className="input-field" />
                    <input {...register('rear_end_of_the_contraction')} type="number" step="0.1" placeholder="היקף יד אחורית בכיווץ" className="input-field" />
                    <input {...register('volume_of_twins_in_the_contraction')} type="number" step="0.1" placeholder="היקף תאומים בכיווץ" className="input-field" />
                    <input {...register('fat_percentage_of_scope_formula')} type="number" step="0.1" placeholder="אחוז שומן נוסחת היקפים" className="input-field" />
                    <input {...register('fat_percentage_of_measuring_device')} type="number" step="0.1" placeholder="אחוז שומן מכשיר מדידה" className="input-field" />
                    <input {...register('average_fat_percentage_percentage')} type="number" step="0.1" placeholder="אחוז שומן ממוצע בדיקות" className="input-field" />
                    <input {...register('file')} type="file" className="input-field" />

                    <button type="submit" className="bg-main text-white p-2 rounded hover:bg-secondary">
                        Submit
                    </button>
                </form>
            </Box>
        </div>
    )
}
