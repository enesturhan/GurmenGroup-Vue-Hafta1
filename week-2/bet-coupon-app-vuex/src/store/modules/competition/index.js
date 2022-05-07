const competitions = {
    namespaced: true,
    state: {
            list:[

                {   id:1,
                    homeowner:"Fenerbahçe", 
                    away:"Galatasaray",
                    homewin:1.50,
                    draw:2.1,
                    awaywin:1.4,
                    hour:"16.30"
                },
                {   id:2,
                    homeowner:"Beşiktaş", 
                    away:"Galatasaray",
                    homewin:5.40,
                    draw:2.3,
                    awaywin:1.9,
                    hour:"20.45"
                },
                {
                    id:3,
                    homeowner:"Beşiktaş", 
                    away:"Fenerbahçe",
                    homewin:1.3,
                    draw:1.8,
                    awaywin:2.1,
                    hour:"15.30"
                }
              
            ]
    },
    getters: {
        _getList(state) {
            return state.list;
        }
    }
}
export default competitions;