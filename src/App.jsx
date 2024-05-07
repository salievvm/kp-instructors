import { registerLocale } from 'react-datepicker';
import ru from "date-fns/locale/ru";
import { Container } from '@mui/system';

import ThemeProvider from './theme';
import AppError from './containers/AppError';
import AppLoading from './containers/AppLoading';

import Instructors from './containers/Instructors';
import { DeviceTypeProvider } from './shared/deviceType';

registerLocale("ru", ru);

function App() {
	return (
		<ThemeProvider>
			<DeviceTypeProvider>
				<Container>
					<Instructors />
					<AppLoading />
					<AppError />
				</Container>
			</DeviceTypeProvider>
		</ThemeProvider>
	);
}

export default App;
