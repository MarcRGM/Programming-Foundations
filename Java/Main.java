import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Base class
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void introduce() {
        System.out.println("Hi, I'm " + name + ", " + age + " years old.");
    }

    public String getName() {
        return name;
    }
}

// Student class inherits from Person
class Student extends Person {
    private String studentId;
    private List<String> courses;

    public Student(String name, int age, String studentId) {
        super(name, age); // Call to the parent constructor
        this.studentId = studentId;
        this.courses = new ArrayList<>();
    }

    @Override
    public void introduce() {
        super.introduce(); // Call to the parent introduce method
        System.out.println("I'm a student. My ID is " + studentId + ".");
        if (!courses.isEmpty()) {
            System.out.println("Enrolled courses: " + courses);
        }
    }

    public void enrollCourse(String course) {
        courses.add(course);
    }
}

// Teacher class inherits from Person
class Teacher extends Person {
    private String subject;

    public Teacher(String name, int age, String subject) {
        super(name, age); // Call to the parent constructor
        this.subject = subject;
    }

    @Override
    public void introduce() {
        super.introduce();
        System.out.println("I'm a teacher. I teach " + subject + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alex", 40));
        people.add(new Student("Maria", 20, "S12345"));
        people.add(new Student("John", 22, "S54321"));
        people.add(new Teacher("Mr. Smith", 50, "Mathematics"));
        people.add(new Teacher("Ms. Lee", 35, "Physics"));

        // Enroll students in courses
        for (Person person : people) {
            if (person instanceof Student) { // Check if the person is a Student
                Student student = (Student) person; // person becomes a Student, also called downcasting
                student.enrollCourse("Java Programming");
                student.enrollCourse("Data Structures");
            }
        }

        // Introduce everyone
        System.out.println("People in the system:");
        for (Person person : people) {
            person.introduce();
            System.out.println();
        }

        // Add new people via user input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Would you like to add a new person? (yes/no): ");
        String response = scanner.nextLine();
        while (response.equalsIgnoreCase("yes")) {
            System.out.print("Is this person a Student or Teacher? (student/teacher): ");
            String type = scanner.nextLine();
            System.out.print("Enter name: ");
            String name = scanner.nextLine();
            System.out.print("Enter age: ");
            int age = Integer.parseInt(scanner.nextLine());

            if (type.equalsIgnoreCase("student")) {
                System.out.print("Enter student ID: ");
                String studentId = scanner.nextLine();
                Student student = new Student(name, age, studentId);
                System.out.print("Enter number of courses to enroll: ");
                int numCourses = Integer.parseInt(scanner.nextLine());
                for (int i = 0; i < numCourses; i++) {
                    System.out.print("Enter course name: ");
                    String course = scanner.nextLine();
                    student.enrollCourse(course);
                }
                people.add(student);
            } else if (type.equalsIgnoreCase("teacher")) {
                System.out.print("Enter subject: ");
                String subject = scanner.nextLine();
                people.add(new Teacher(name, age, subject));
            } else {
                System.out.println("Unknown type. Skipping.");
            }

            System.out.print("Would you like to add another person? (yes/no): ");
            response = scanner.nextLine();
        }

        // Show updated list
        System.out.println("\nUpdated list of people:");
        for (Person person : people) {
            person.introduce();
            System.out.println();
        }

        scanner.close();
    }
}
