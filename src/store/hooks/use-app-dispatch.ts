import {AppDispatch} from '../index';
import {useDispatch} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
