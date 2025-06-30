export const personalQuestions = [
    {
        id: "Age",
        label: "1. What is your Age?",
        options: [
            { value: 0, label: "12-14 years old (born 2010-2012)" },
            { value: 1, label: "15-17 years old (born 2007-2009)" },
            { value: 2, label: "18-20 years old (born 2004-2006)" },
            { value: 3, label: "21-23 years old (born 2001-2003)" },
            { value: 4, label: "24-26 years old (born 1998-2000)" },
            { value: 5, label: "27-28 years old (born 1996-1997)" }
        ]
    },
    {
        id: "Gender",
        label: "2. What is your Gender?",
        options: [
            { value: 0, label: "Male" },
            { value: 1, label: "Female" }
        ]
    },
    {
        id: "CurrentStatus",
        label: "3. What is your Current Status?",
        options: [
            { value: 0, label: "Student" },
            { value: 1, label: "Employed (full-time or part-time)" },
            { value: 2, label: "Working Student" },
            { value: 3, label: "Unemployed (not seeking employment, etc.)" }
        ]
    },
    {
        id: "DiagnosedWithaMentalHealthCondition",
        label: "4. Have you ever been diagnosed with a mental health condition by a professional (doctor, therapist, etc.)?",
        options: [
            { value: 0, label: "Yes" },
            { value: 1, label: "No" }
        ]
    },
    {
        id: "ReceivedMentalHealthTreatmentOrSupport",
        label: "5. Are you currently receiving treatment for a mental health condition?",
        options: [
            { value: 0, label: "Yes" },
            { value: 1, label: "No" }
        ]
    }
];


export const bedtimeQuestions = [
    {
        id: "EarliestBedtimeWeekDays",
        label: "1. What is your earliest bedtime you’ve gone to sleep?",
        type: "time"
    },
    {
        id: "LatestBedtimeWeekDays",
        label: "2. What is the latest bedtime you've gone to sleep?",
        type: "time"
    },
    {
        id: "UsualBedtimeWeekDays",
        label: "3. What has been your usual bedtime?",
        type: "time"
    }
];

export const weekendBedtimeQuestions = [
    {
        id: "EarliestBedtimeWeekend",
        label: "1. What is your earliest bedtime you’ve gone to sleep?",
        type: "time"
    },
    {
        id: "LatestBedtimeWeekend",
        label: "2. What is the latest bedtime you've gone to sleep?",
        type: "time"
    },
    {
        id: "UsualBedtimeWeekend",
        label: "3. What has been your usual bedtime?",
        type: "time"
    }
];

export const sleepHoursQuestions = [
    {
        id: "HoursOfSleepDuringWeekdays",
        label: "1. How many hours of sleep have you typically gotten on nights before workdays, school days, or regular weekdays over the past month?",
        type: "radio",
        options: [
            { id: "Hr1", value: 0, label: "Less than 5 hours" },
            { id: "Hr2", value: 1, label: "5-6 hours" },
            { id: "Hr3", value: 2, label: "6-7 hours" },
            { id: "Hr4", value: 3, label: "7-8 hours" }
        ]
    },
    {
        id: "HoursOfSWleepDuringWeekends",
        label: "2. How many hours of sleep have you typically gotten on nights before weekends or days off over the past month?",
        type: "radio",
        options: [
            { id: "Hr5", value: 0, label: "Less than 5 hours" },
            { id: "Hr6", value: 1, label: "5-6 hours" },
            { id: "Hr7", value: 2, label: "6-7 hours" },
            { id: "Hr8", value: 3, label: "7-8 hours" }
        ]
    }
];

export const sleepDisruptionQuestions = [
    {
        id: "DPMdifficultyFallingSleepIn30minutes",
        label: "1. Cannot get to sleep within 30 minutes?",
        type: "radio",
        options: [
            { id: "sl1", value: 0, label: "Not during the past month" },
            { id: "sl2", value: 1, label: "Less than once a week" },
            { id: "sl3", value: 2, label: "Once or twice a week" },
            { id: "sl4", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMwakingUpInNight",
        label: "2. Wake up in the middle of the night or early morning?",
        type: "radio",
        options: [
            { id: "sl5", value: 0, label: "Not during the past month" },
            { id: "sl6", value: 1, label: "Less than once a week" },
            { id: "sl7", value: 2, label: "Once or twice a week" },
            { id: "sl8", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMuseBathroomInMiddleOfNight",
        label: "3. Have to get up to use the bathroom?",
        type: "radio",
        options: [
            { id: "sl9", value: 0, label: "Not during the past month" },
            { id: "sl10", value: 1, label: "Less than once a week" },
            { id: "sl11", value: 2, label: "Once or twice a week" },
            { id: "sl12", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMloudSnoringCoughing",
        label: "4. Cough or snore loudly?",
        type: "radio",
        options: [
            { id: "sl13", value: 0, label: "Not during the past month" },
            { id: "sl14", value: 1, label: "Less than once a week" },
            { id: "sl15", value: 2, label: "Once or twice a week" },
            { id: "sl16", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMfeelTooCold",
        label: "5. Feel too cold?",
        type: "radio",
        options: [
            { id: "sl17", value: 0, label: "Not during the past month" },
            { id: "sl18", value: 1, label: "Less than once a week" },
            { id: "sl19", value: 2, label: "Once or twice a week" },
            { id: "sl20", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMfeelTooHot",
        label: "6. Feel too hot?",
        type: "radio",
        options: [
            { id: "sl21", value: 0, label: "Not during the past month" },
            { id: "sl22", value: 1, label: "Less than once a week" },
            { id: "sl23", value: 2, label: "Once or twice a week" },
            { id: "sl24", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMhaveBadDreams",
        label: "7. Have bad dreams?",
        type: "radio",
        options: [
            { id: "sl25", value: 0, label: "Not during the past month" },
            { id: "sl26", value: 1, label: "Less than once a week" },
            { id: "sl27", value: 2, label: "Once or twice a week" },
            { id: "sl28", value: 3, label: "Three or more times a week" }
        ]
    },
    {
        id: "DPMhavePain",
        label: "8. Have pain?",
        type: "radio",
        options: [
            { id: "sl29", value: 0, label: "Not during the past month" },
            { id: "sl30", value: 1, label: "Less than once a week" },
            { id: "sl31", value: 2, label: "Once or twice a week" },
            { id: "sl32", value: 3, label: "Three or more times a week" }
        ]
    }
];


export const sleepImpactQuestions = [
    {
        id: "DPMdistruptedByResponsiblities",
        label: "1. Work, school, or personal responsibilities affected the ability to maintain a regular bedtime?",
        type: "radio",
        options: [
            { id: "ex1", value: 0, label: "Never" },
            { id: "ex2", value: 1, label: "Rarely" },
            { id: "ex3", value: 2, label: "Sometimes" },
            { id: "ex4", value: 3, label: "Often" },
            { id: "ex5", value: 4, label: "Always" }
        ]
    },
    {
        id: "DPMlateNightWorkStudy",
        label: "2. Sleep schedule been disrupted by late-night work, studying, or other responsibilities?",
        type: "radio",
        options: [
            { id: "ex6", value: 0, label: "Never" },
            { id: "ex7", value: 1, label: "Rarely" },
            { id: "ex8", value: 2, label: "Sometimes" },
            { id: "ex9", value: 3, label: "Often" },
            { id: "ex10", value: 4, label: "Always" }
        ]
    },
    {
        id: "DPMdaytimeSleepiness",
        label: "3. Felt tired or sleepy during the day due to lack of sleep the previous night?",
        type: "radio",
        options: [
            { id: "ex11", value: 0, label: "Never" },
            { id: "ex12", value: 1, label: "Rarely" },
            { id: "ex13", value: 2, label: "Sometimes" },
            { id: "ex14", value: 3, label: "Often" },
            { id: "ex15", value: 4, label: "Always" }
        ]
    },
    {
        id: "DPMconsistenWakeWeekdays",
        label: "4. Woken up at the same time on weekdays (work or school days)?",
        type: "radio",
        options: [
            { id: "ex16", value: 0, label: "Never" },
            { id: "ex17", value: 1, label: "Rarely" },
            { id: "ex18", value: 2, label: "Sometimes" },
            { id: "ex19", value: 3, label: "Often" },
            { id: "ex20", value: 4, label: "Always" }
        ]
    },
    {
        id: "IPMconsistentWakeWeekends",
        label: "5. Woken up at the same time on weekends or days off?",
        type: "radio",
        options: [
            { id: "ex21", value: 0, label: "Never" },
            { id: "ex22", value: 1, label: "Rarely" },
            { id: "ex23", value: 2, label: "Sometimes" },
            { id: "ex24", value: 3, label: "Often" },
            { id: "ex25", value: 4, label: "Always" }
        ]
    },
    {
        id: "IPMworkSchoolThoughtsAffectSleep",
        label: "6. Had difficulty sleeping because of thinking about work, school, or personal responsibilities?",
        type: "radio",
        options: [
            { id: "ex26", value: 0, label: "Never" },
            { id: "ex27", value: 1, label: "Rarely" },
            { id: "ex28", value: 2, label: "Sometimes" },
            { id: "ex29", value: 3, label: "Often" },
            { id: "ex30", value: 4, label: "Always" }
        ]
    },
    {
        id: "IPMwellRestedWeekdays",
        label: "7. Felt well-rested when waking up on work/school days?",
        type: "radio",
        options: [
            { id: "ex31", value: 0, label: "Never" },
            { id: "ex32", value: 1, label: "Rarely" },
            { id: "ex33", value: 2, label: "Sometimes" },
            { id: "ex34", value: 3, label: "Often" },
            { id: "ex35", value: 4, label: "Always" }
        ]
    },
    {
        id: "IPMwellRestedWeekends",
        label: "8. Felt well-rested upon waking on weekends or days off?",
        type: "radio",
        options: [
            { id: "ex36", value: 0, label: "Never" },
            { id: "ex37", value: 1, label: "Rarely" },
            { id: "ex38", value: 2, label: "Sometimes" },
            { id: "ex39", value: 3, label: "Often" },
            { id: "ex40", value: 4, label: "Always" }
        ]
    }
];


export const stressLevelQuestions = [
    {
        id: "AcademicWorkPressure",
        label: "1. Academic or Work pressure (e.g., deadlines, exams, workload)?",
        type:"radio",
        options: [
            { id: "st1", value: 0, label: "Not Stressed" },
            { id: "st2", value: 1, label: "Stressed" },
            { id: "st3", value: 2, label: "Moderate" },
            { id: "st4", value: 3, label: "Severe" },
            { id: "st5", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "PersonalFamilyStress",
        label: "2. Personal or family issues (e.g., conflicts, responsibilities)?",
        type:"radio",
        options: [
            { id: "st6", value: 0, label: "Not Stressed" },
            { id: "st7", value: 1, label: "Stressed" },
            { id: "st8", value: 2, label: "Moderate" },
            { id: "st9", value: 3, label: "Severe" },
            { id: "st10", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "FinancialStress",
        label: "3. Financial concerns (e.g., bills, debt)?",
        type:"radio",
        options: [
            { id: "st11", value: 0, label: "Not Stressed" },
            { id: "st12", value: 1, label: "Stressed" },
            { id: "st13", value: 2, label: "Moderate" },
            { id: "st14", value: 3, label: "Severe" },
            { id: "st15", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "HealthConcernsStress",
        label: "4. Health-related concerns (e.g., physical or mental health)?",
        type:"radio",
        options: [
            { id: "st16", value: 0, label: "Not Stressed" },
            { id: "st17", value: 1, label: "Stressed" },
            { id: "st18", value: 2, label: "Moderate" },
            { id: "st19", value: 3, label: "Severe" },
            { id: "st20", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "OverthinkingAnxiety",
        label: "5. Overthinking or anxiety (e.g., racing thoughts, worrying)?",
        type:"radio",
        options: [
            { id: "st21", value: 0, label: "Not Stressed" },
            { id: "st22", value: 1, label: "Stressed" },
            { id: "st23", value: 2, label: "Moderate" },
            { id: "st24", value: 3, label: "Severe" },
            { id: "st25", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "TimeManagementIssues",
        label: "6. Difficulty managing time effectively?",
        type:"radio",
        options: [
            { id: "st26", value: 0, label: "Not Stressed" },
            { id: "st27", value: 1, label: "Stressed" },
            { id: "st28", value: 2, label: "Moderate" },
            { id: "st29", value: 3, label: "Severe" },
            { id: "st30", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "ExternalDisturbancesStress",
        label: "7. External disturbances (e.g., noise, uncomfortable environment)?",
        type:"radio",
        options: [
            { id: "st31", value: 0, label: "Not Stressed" },
            { id: "st32", value: 1, label: "Stressed" },
            { id: "st33", value: 2, label: "Moderate" },
            { id: "st34", value: 3, label: "Severe" },
            { id: "st35", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "TechUseBeforeBed",
        label: "8. Technology or social media use before bed?",
        type:"radio",
        options: [
            { id: "st36", value: 0, label: "Not Stressed" },
            { id: "st37", value: 1, label: "Stressed" },
            { id: "st38", value: 2, label: "Moderate" },
            { id: "st39", value: 3, label: "Severe" },
            { id: "st40", value: 4, label: "Very Severe" }
        ]
    }
];


export const tirednessFactorsQuestions = [
    {
        id: "OverthinkingAtNight",
        label: "1. Overthinking or feeling stressed at night?",
        type: "radio",
        options: [
            { id: "ot1", value: 0, label: "Not Stressed" },
            { id: "ot2", value: 1, label: "Stressed" },
            { id: "ot3", value: 2, label: "Moderate" },
            { id: "ot4", value: 3, label: "Severe" },
            { id: "ot5", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "InterruptedSleepDueToExternalDisturbances",
        label: "2. Interrupted sleep due to external disturbances?",
        type: "radio",
        options: [
            { id: "ot6", value: 0, label: "Not Stressed" },
            { id: "ot7", value: 1, label: "Stressed" },
            { id: "ot8", value: 2, label: "Moderate" },
            { id: "ot9", value: 3, label: "Severe" },
            { id: "ot10", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "InconsistentSleepSchedule",
        label: "3. Inconsistent sleep schedule?",
        type: "radio",
        options: [
            { id: "ot11", value: 0, label: "Not Stressed" },
            { id: "ot12", value: 1, label: "Stressed" },
            { id: "ot13", value: 2, label: "Moderate" },
            { id: "ot14", value: 3, label: "Severe" },
            { id: "ot15", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "PoorPhysicalHealth",
        label: "4. Poor physical health (e.g., illness, pain)?",
        type: "radio",
        options: [
            { id: "ot16", value: 0, label: "Not Stressed" },
            { id: "ot17", value: 1, label: "Stressed" },
            { id: "ot18", value: 2, label: "Moderate" },
            { id: "ot19", value: 3, label: "Severe" },
            { id: "ot20", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "UseOfSocialMediaLateNight",
        label: "5. Use of technology or social media late at night?",
        type: "radio",
        options: [
            { id: "ot21", value: 0, label: "Not Stressed" },
            { id: "ot22", value: 1, label: "Stressed" },
            { id: "ot23", value: 2, label: "Moderate" },
            { id: "ot24", value: 3, label: "Severe" },
            { id: "ot25", value: 4, label: "Very Severe" }
        ]
    }
];


export const lifestyleImpactQuestions = [
    {
        id: "SkippingMealsIrregularEatingPatterns",
        label: "1. Skipping meals or irregular eating patterns?",
        type: "radio",
        options: [
            { id: "lh1", value: 0, label: "Not Stressed" },
            { id: "lh2", value: 1, label: "Stressed" },
            { id: "lh3", value: 2, label: "Moderate" },
            { id: "lh4", value: 3, label: "Severe" },
            { id: "lh5", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "ExcessiveScreenTimeAtLateNight",
        label: "2. Spending excessive time on screens before bed?",
        type: "radio",
        options: [
            { id: "lh6", value: 0, label: "Not Stressed" },
            { id: "lh7", value: 1, label: "Stressed" },
            { id: "lh8", value: 2, label: "Moderate" },
            { id: "lh9", value: 3, label: "Severe" },
            { id: "lh10", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "NegativeImpactStimulants",
        label: "3. Consuming stimulants (e.g., caffeine, energy drinks)?",
        type: "radio",
        options: [
            { id: "lh11", value: 0, label: "Not Stressed" },
            { id: "lh12", value: 1, label: "Stressed" },
            { id: "lh13", value: 2, label: "Moderate" },
            { id: "lh14", value: 3, label: "Severe" },
            { id: "lh15", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "NotHavingConsistentSleepSchedule",
        label: "4. Not having a consistent sleep schedule?",
        type: "radio",
        options: [
            { id: "lh16", value: 0, label: "Not Stressed" },
            { id: "lh17", value: 1, label: "Stressed" },
            { id: "lh18", value: 2, label: "Moderate" },
            { id: "lh19", value: 3, label: "Severe" },
            { id: "lh20", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "StressfulConvoBeforeBed",
        label: "5. Engaging in stressful conversations before bed?",
        type: "radio",
        options: [
            { id: "lh21", value: 0, label: "Not Stressed" },
            { id: "lh22", value: 1, label: "Stressed" },
            { id: "lh23", value: 2, label: "Moderate" },
            { id: "lh24", value: 3, label: "Severe" },
            { id: "lh25", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "NegativeImpactPeerSocietalPressure",
        label: "6. Feeling peer pressure or societal expectations?",
        type: "radio",
        options: [
            { id: "lh26", value: 0, label: "Not Stressed" },
            { id: "lh27", value: 1, label: "Stressed" },
            { id: "lh28", value: 2, label: "Moderate" },
            { id: "lh29", value: 3, label: "Severe" },
            { id: "lh30", value: 4, label: "Very Severe" }
        ]
    },
    {
        id: "NegativeImpactHighExpectations",
        label: "7. High expectations from yourself or others?",
        type: "radio",
        options: [
            { id: "lh31", value: 0, label: "Not Stressed" },
            { id: "lh32", value: 1, label: "Stressed" },
            { id: "lh33", value: 2, label: "Moderate" },
            { id: "lh34", value: 3, label: "Severe" },
            { id: "lh35", value: 4, label: "Very Severe" }
        ]
    }
];

