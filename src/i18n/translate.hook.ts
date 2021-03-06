import I18n from 'i18n-js';
import { useStore } from 'contexts/store.context';
import { AvailableLanguages } from 'i18n/index';
import { Language } from 'i18n/index';

export interface UseTranslateProduct {
	translate: (content: string) => string;
	setLanguage: (languageCode: AvailableLanguages) => void;
	languages: Language[];
	currentLanguage: AvailableLanguages;
}

export const useTranslate = (): UseTranslateProduct => {
	const {
		language: { languages, currentLanguage, setCurrentLanguage },
	} = useStore();

	const translate = (content: string) =>
		I18n.t(content, { locale: currentLanguage });

	const setLanguage = (languageCode: AvailableLanguages): void =>
		setCurrentLanguage(languageCode);

	return {
		translate,
		setLanguage,
		languages,
		currentLanguage,
	};
};
