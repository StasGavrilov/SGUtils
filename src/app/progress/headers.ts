export const headers = [
    'מסה/חיטוב',
    'תאריך',
    'משקל',
    'היקף חזה',
    'היקף מותניים (טבור)',
    'היקף ירך עליון בכיווץ',
    'היקף ירך תחתון בכיווץ',
    'היקף יד קדמית בכיווץ',
    'היקף יד אחורית בכיווץ',
    'היקף תאומים בכיווץ',
    'אחוז שומן נוסחת היקפים',
    'אחוז שומן מכשיר מדידה',
    'אחוז שומן ממוצע בדיקות',
    'קובץ',
]



export function matchName(progress: Record<string, string | number>[]) {
    return progress.map((prog) => ({
        'מסה/חיטוב': prog.bulk_cut,
        'תאריך': prog.created_at,
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
    }))
}
