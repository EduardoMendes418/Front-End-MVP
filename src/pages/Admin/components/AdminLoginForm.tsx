import type React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAdminAuthStore } from "../../../stores/adminAuthStore";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const AdminLoginForm: React.FC = () => {
	const { adminLogin } = useAdminAuthStore();
	const navigate = useNavigate();
	const [error, setError] = useState<string | null>(null);
	const { t } = useTranslation();

	const mockUser = {
		email: "admin@gmail.com",
		password: "admin@123",
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email(t("invalidEmail"))
				.required(t("required")),
			password: Yup.string().required(t("required")),
		}),
		onSubmit: (values) => {
			if (
				values.email === mockUser.email &&
				values.password === mockUser.password
			) {
				adminLogin();
				navigate("/");
			} else {
				setError(t("invalidCredentials"));
			}
		},
	});

	return (
		<>
			{error && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className="p-4 mt-6 text-sm text-red-200 bg-red-500/50 rounded-lg"
				>
					{error}
				</motion.div>
			)}

			<form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="relative"
				>
					<Mail className="absolute w-6 h-6 text-gray-400 top-3.5 left-4" />
					<input
						id="email"
						name="email"
						type="email"
						placeholder={t("emailPlaceholder")}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						className="w-full py-3 pl-14 pr-4 text-white placeholder-gray-400 bg-white/10 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
					/>
				</motion.div>
				{formik.touched.email && formik.errors.email ? (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-sm text-red-400"
					>
						{formik.errors.email}
					</motion.div>
				) : null}

				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="relative"
				>
					<Lock className="absolute w-6 h-6 text-gray-400 top-3.5 left-4" />
					<input
						id="password"
						name="password"
						type="password"
						placeholder={t("passwordPlaceholder")}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						className="w-full py-3 pl-14 pr-4 text-white placeholder-gray-400 bg-white/10 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
					/>
				</motion.div>
				{formik.touched.password && formik.errors.password ? (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-sm text-red-400"
					>
						{formik.errors.password}
					</motion.div>
				) : null}

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="rememberMe"
							name="rememberMe"
							type="checkbox"
							onChange={formik.handleChange}
							checked={formik.values.rememberMe}
							className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
						/>
						<label
							htmlFor="rememberMe"
							className="block ml-2 text-sm text-gray-400"
						>
							{t("rememberMe")}
						</label>
					</div>
				</div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<button
						type="submit"
						className="w-full px-3 py-3 text-lg font-bold text-white bg-purple-600 border border-transparent rounded-xl shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
					>
						{t("signIn")}
					</button>
				</motion.div>
			</form>
		</>
	);
};
