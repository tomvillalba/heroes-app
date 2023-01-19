import {Route, Routes} from 'react-router-dom';
import {Navbar} from '../components/ui/Navbar';
import {MarvelScreen} from '../components/marvel/MarvelScreen';
import {DcScreen} from '../components/dc/DcScreen';
import {SearchScreen} from '../components/search/SearchScreen';
import {HeroScreen} from '../components/heroes/HeroScreen';
import {NotFound} from '../components/notfound/NotFound';

export const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container-sm p-3 p-sm-0 mt-4">
				<Routes>
					<Route path="marvel" element={<MarvelScreen />} />
					<Route path="dc" element={<DcScreen />} />

					<Route path="search" element={<SearchScreen />} />
					<Route path="hero/:id" element={<HeroScreen />} />

					<Route path="/" element={<MarvelScreen />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
};
