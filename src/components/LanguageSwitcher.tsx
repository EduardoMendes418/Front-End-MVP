import type React from "react";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC = () => {
	const { t, i18n } = useTranslation();

	const languages = useMemo(
		() => [
			{ code: "pt", name: t("portuguese"), flag: "🇧🇷" },
			{ code: "en", name: t("english"), flag: "🇺🇸" },
			{ code: "es", name: t("spanish"), flag: "🇪🇸" },
			{ code: "de", name: t("german"), flag: "🇩🇪" },
		],
		[t],
	);

	const handleLanguageChange = useCallback(
		(code: string) => {
			i18n.changeLanguage(code);
		},
		[i18n],
	);

	return (
		<div className="relative group">
			<button
				type="button"
				className="p-2 rounded-xl transition-colors duration-300 hover:bg-white/10 text-white"
				aria-label="Change language"
				aria-haspopup="true"
				aria-expanded="false"
			>
				<Globe size={20} />
			</button>
			<ul className="absolute right-0 top-full mt-2 w-48 py-2 rounded-xl shadow-2xl border border-white/20 bg-white/5 backdrop-filter backdrop-blur-lg transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
				{languages.map((lang) => (
					<li key={lang.code} role="none">
						<button
							type="button"
							role="menuitem"
							onClick={() => handleLanguageChange(lang.code)}
							className={`w-full px-4 py-2 text-left transition-colors duration-200 flex items-center space-x-3 ${
								i18n.language === lang.code
									? "text-purple-400 font-semibold"
									: "text-gray-200 hover:text-white"
							}`}
						>
							<span className="text-lg" aria-hidden="true">
								{lang.flag}
							</span>
							<span>{lang.name}</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
