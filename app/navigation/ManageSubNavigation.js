import { createStackNavigator } from "@react-navigation/stack";
import ManageSubscriptionScreen from "../screens/Subscriptions/ManageSubscriptionScreen";
import NewSubFirstStepScreen from "../screens/Subscriptions/NewSubFirstStepScreen";
import SubscriptionItemsOverviewScreen from "../screens/Subscriptions/SubscriptionItemsOverviewScreen";

const Stack = createStackNavigator();

const ManageSub = () => (
  <>
    <Stack.Screen name="ManageSub" component={ManageSubscriptionScreen} />
    <Stack.Screen
      name="NewSubscriptionFirstStep"
      component={NewSubFirstStepScreen}
    />
    <Stack.Screen
      name="SubscriptionItemsOverview"
      component={SubscriptionItemsOverviewScreen}
    />
  </>
);

export default ManageSub;
