import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'raf/polyfill';

Enzyme.configure({ 
  adapter: new EnzymeAdapter(),
});