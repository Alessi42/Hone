import Home from './Home'
import Counter from './Counter'
import Workouts from './Workouts'
// Arms,Abs,Cardio,Legs
export default {
	indexRoute: Home,
	childRoutes: [Counter,Workouts]
}
