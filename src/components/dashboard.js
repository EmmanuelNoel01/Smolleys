import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="cover-1">
    <div className="cover">
        <div class="container">
            <div class="person">
                <h2>me</h2>
                {/* <img src="" alt="Picture of person"/> */}
                <h3>John Doe</h3>
            </div>
            <div class="component2"><i class="fa fa-graduation-cap"></i>Add Curriculum</div>
            <div class="component3">Add Lesson</div>
            <div class="component4">Add Quiz</div>
            <div class="component5">Reports</div>
        </div>
    <div className="covers">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Welcome, tutorname!</h5>
            <p class="card-text">Give kids a good learning experience</p>
            <form action="/search" method="get">
                 <input type="text" name="search" placeholder="What are you looking for?"/>
                 <button type="submit">Search</button>
            </form>

        </div>
        </div>
        <div class="card-1">
        <div class="card-body">
            <h5 class="card-title">15</h5>
            <p class="card-text">Lessons</p>
        </div>
        </div>
        <div class="card-2">
        <div class="card-body">
            <h5 class="card-title">15</h5>
            <p class="card-text">Lessons</p>
        </div>
        </div>
        
        <div class="card-3">
        <div class="card-body">
            <h5 class="card-title">15</h5>
            <p class="card-text">Lessons</p>
        </div>
        </div>
    </div>
    </div>
    </div>
);
}

export default Dashboard;
