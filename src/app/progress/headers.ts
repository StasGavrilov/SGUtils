export function mapProgressToTableData(progress: Record<string, string | number>[]) {
    const mappedData = progress.map((prog) => {
        const createdDate = new Date(prog.created_at)
        const formattedDate = `${createdDate.getDate().toString().padStart(2, '0')}/${(createdDate.getMonth() + 1).toString().padStart(2, '0')}/${createdDate.getFullYear()}`
        const formattedTime = `${createdDate.getHours().toString().padStart(2, '0')}:${createdDate.getMinutes().toString().padStart(2, '0')}:${createdDate.getSeconds().toString().padStart(2, '0')}`
        const formattedDateTime = `${formattedDate} ${formattedTime}`

        return {
            'מסה/חיטוב': prog.bulk_cut,
            'תאריך': formattedDateTime,
            'משקל': 89.3,
            'היקף צוואר': prog.neck_scope,
            'היקף חזה': prog.bust,
            'היקף מותניים (טבור)': prog.waist_circumference_navel,
            'היקף ירך עליון בכיווץ': prog.supreme_court_scope_in_the_contraction,
            'היקף ירך תחתון בכיווץ': prog.underwear_in_the_contraction,
            'היקף יד קדמית בכיווץ': prog.front_hand_volume_in_the_contraction,
            'היקף יד אחורית בכיווץ': prog.rear_end_of_the_contraction,
            'היקף תאומים בכיווץ': prog.volume_of_twins_in_the_contraction,
            'אחוז שומן נוסחת היקפים': prog.fat_percentage_of_scope_formula,
            'אחוז שומן מכשיר מדידה': prog.fat_percentage_of_measuring_device,
            'אחוז שומן ממוצע בדיקות': prog.average_fat_percentage_percentage,
            'קובץ': prog.file,
        }
    })

    const headers = mappedData.length > 0 ? Object.keys(mappedData[0]) : []

    return { headers, data: mappedData }
}
