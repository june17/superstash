import React from 'react';
import DashContentAccount from './DashContentAccount';
import DashContentBudget from './DashContentBudget';
import DashContentExpenses from './DashContentExpenses';
import DashContentGoals from './DashContentGoals';

function DashContent(props) {
    return (
        <div class="grid md:grid-cols-2 gap-4">
            <div>  
                <DashContentBudget />
                <DashContentExpenses />
            </div>
            <div>
                <DashContentAccount /> 
                <DashContentGoals />
            </div>
        </div>
    );
}

export default DashContent;