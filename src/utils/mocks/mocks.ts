import {createAPI} from '../../store/api/api';
import {Action} from '@reduxjs/toolkit';
import {ThunkDispatch} from 'redux-thunk';
import {RootState} from '../../store';

export type AppThunkDispatch = ThunkDispatch<RootState, ReturnType<typeof createAPI>, Action>;
