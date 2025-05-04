import './../styles/globals.css';
import './../styles/custom.css';
import HeaderComponent from '../components/inc/HeaderComponent';
import FooterComponent from '../components/inc/FooterComponent';

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={`antialiased text-gray-800`}>
				<HeaderComponent />
				{children}
				<FooterComponent />
			</body>
		</html>
	);
}
