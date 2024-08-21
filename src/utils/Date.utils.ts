import { GetDayNames } from "../contracts/Date.contract";
import { useTranslation } from 'react-i18next';

export const GetDaysOfWeek = (): string[] => {
    const dayNames = GetDayNames();
    const daysOfWeek: string[] = [];
    const today = new Date();
    const { t } = useTranslation();

    for (let i = 0; i < 7 - today.getDay(); i++) {
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() + i);

        let dayLabel: string;
        if (i === 0) {
            dayLabel = `${t('day.today')} ${currentDay.getDate()}/${currentDay.getMonth() + 1}`;
        } else {
            dayLabel = `${dayNames[currentDay.getDay()]} ${currentDay.getDate()}/${currentDay.getMonth() + 1}`;
        }

        daysOfWeek.push(dayLabel);
    }

    return daysOfWeek;
};
