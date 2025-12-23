import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>
        Coded by Andreia Ribeiro ·<a href="#">Open Sourced</a>·
      </footer>
    </div>
  );
}
