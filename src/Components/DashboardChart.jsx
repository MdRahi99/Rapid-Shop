/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DashboardChart = ({ users, products, orders }) => {

    const barChartContainer = useRef(null);
    const barChartRef = useRef(null);

    const pieChartContainer = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        // Bar Chart
        if (barChartContainer && barChartContainer.current) {
            barChartRef.current = new Chart(barChartContainer.current, {
                type: "bar",
                data: {
                    labels: ["Users", "Products", "Orders"],
                    datasets: [{
                        label: "Distribution",
                        data: [users.length, products.length, orders.length],
                        backgroundColor: [
                            "rgba(0, 123, 255, 0.5)",
                            "rgba(255, 193, 7, 0.5)",
                            "rgba(40, 167, 69, 0.5)"
                        ],
                        borderColor: [
                            "rgba(0, 123, 255, 1)",
                            "rgba(255, 193, 7, 1)",
                            "rgba(40, 167, 69, 1)"
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Pie Chart
        if (pieChartContainer && pieChartContainer.current) {
            pieChartRef.current = new Chart(pieChartContainer.current, {
                type: "pie",
                data: {
                    labels: ["Users", "Products", "Orders"],
                    datasets: [{
                        label: "Distribution",
                        data: [users.length, products.length, orders.length],
                        backgroundColor: [
                            "rgba(0, 123, 255, 0.5)",
                            "rgba(255, 193, 7, 0.5)",
                            "rgba(40, 167, 69, 0.5)"
                        ],
                        borderColor: [
                            "rgba(0, 123, 255, 1)",
                            "rgba(255, 193, 7, 1)",
                            "rgba(40, 167, 69, 1)"
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }

        return () => {
            if (barChartRef.current) {
                barChartRef.current.destroy();
            }
            if (pieChartRef.current) {
                pieChartRef.current.destroy();
            }
        };
    }, [users.length, products.length, orders.length]);

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-4 mt-16">
            <div className="w-full lg:w-1/2">
                <canvas ref={barChartContainer}></canvas>
            </div>
            <div className="w-full lg:w-1/2">
                <canvas ref={pieChartContainer}></canvas>
            </div>
        </div>
    );
};

export default DashboardChart;