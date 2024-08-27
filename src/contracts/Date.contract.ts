import { useTranslation } from 'react-i18next';

export const GetDayNames = (): string[] => {
    const { t } = useTranslation();
    return [
        t('day.sunday'),
        t('day.monday'),
        t('day.tuesday'),
        t('day.wednesday'),
        t('day.thursday'),
        t('day.friday'),
        t('day.saturday')
    ];
};
