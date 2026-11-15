import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {

    


    return (
        <div>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    dataKey="value"
                    isAnimationActive={isAnimationActive}
                    shape={MyCustomPie}
                />
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default StatsPage;