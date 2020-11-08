import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-all-tests",
  templateUrl: "./all-tests.component.html",
  styleUrls: ["./all-tests.component.css"],
})
export class AllTestsComponent implements OnInit {
  constructor() {
    this.tests.forEach((t) => (t.bgClass = this.bgColorClassOf()));
  }
  tests: Test[] = [
    new Test(1, "Asp.Net Core", 20, 60, "1 Hour"),
    new Test(1, "C#", 30, 45, "45 Minutes"),
    new Test(1, "LINQ & EF Core", 15, 25, "25 Minutes"),
    new Test(1, "Javascript & jQuery", 30, 20, "20 Minutes"),
    new Test(1, "Typescript", 15, 10, "10 Minutes"),
    new Test(1, "React.js", 20, 40, "40 Minutes"),
    new Test(1, "Angular", 25, 50, "50 Minutes"),
    new Test(1, "Asp.Net MVC", 50, 90, "1 Hour 30 Minutes"),
    new Test(1, "Web API", 20, 20, "25 Minutes"),
    new Test(1, "SQL Server", 15, 15, "15 Minutes"),
    new Test(1, "Bazor & Razor Pages", 25, 20, "20 Minutes"),
    new Test(1, "Vue.js", 20, 60, "1 Hour"),
    new Test(1, "React Native", 20, 25, "25 Minutes"),
    new Test(1, "Xamarin", 20, 30, "30 Minutes"),
  ];

  displayTests = [...this.tests];
  searchTerm: string;
  ngOnInit(): void {}

  onSearch() {
    const term = this.searchTerm?.replace(/\s{2,}/g, " ").trim();
    if (term) {
      this.displayTests = this.displayTests.filter(
        (t) => t.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1
      );
    } else {
      this.displayTests = [...this.tests];
    }
  }

  private bgClasses = [
    "bg-primary",
    "bg-secondary",
    "bg-danger",
    "bg-success",
    "bg-dark",
    "bg-warning",
    "bg-info",
  ];
  bgColorClassOf() {
    return this.bgClasses[Math.floor(Math.random() * this.bgClasses.length)];
  }
}

export class Test {
  constructor(
    public id: number,
    public name: string,
    public totalQuestions: number,
    public totalTimeInMinute: number,
    public displayTime?: string,
    public description?: string,
    public iconImage?: string,
    public bgClass: string = "bg-primary"
  ) {}
}
