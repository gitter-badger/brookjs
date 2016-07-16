import { constant, fromESObservable, merge, pool } from 'kefir';

export default function enhancer(...systems) {
    return createStore => (reducer, preloadedState, enhancer) => {
        const store = createStore(reducer, preloadedState, enhancer);
        const _dispatch = store.dispatch;
        const actions$ = pool();
        const value = action => {
            const result = _dispatch(action);
            actions$.plug(constant(result));
            return result;
        };

        actions$.plug(merge(
            systems.map(system =>
                system(actions$, fromESObservable(store)))));

        return Object.assign(store, { dispatch: value });
    };
}
