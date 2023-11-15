
import java.util.Scanner;
public class Calculator {
    static void calculator() {
        Scanner scanner =  new Scanner(System.in);
        
		String input = scanner.nextLine();

		String num1 = "";
		String num2 = "";
		int operator = 0;
		int number = 1;

		for(int i = 0; i < input.length(); i++) {
			char c = input.charAt(i);
			if(c == '+') {
				number++;
				operator = 1;
				continue;
			}
			if(c == '+') {
							number++;
							operator = 1;
							continue;
			}
			if(c == '-') {
							number++;
							operator = 2;
							continue;
			}
			if(c == '*') {
							number++;
							operator = 3;
							continue;
			}
			if(c == '/') {
							number++;
							operator = 4;
							continue;
			}
			switch(number) {

				case 1:
					num1 += Character.toString(c);
					break;
				case 2:
					num2 += Character.toString(c);
					break;
			}
		}
		int Num1  = Integer.parseInt(num1);
		int Num2  = Integer.parseInt(num2);

		switch(operator) {
			case 1:
				System.out.println(Num1 + Num2);
				break;
			case 2:
				System.out.println(Num1 - Num2);
				break;
			case 3:
				System.out.println(Num1 * Num2);
				break;
			case 4:
				System.out.println(Num1 / Num2);
				break;

		}
        System.out.println("Open Calculator again? Y/N");
    String condition = scanner.nextLine();
        if(condition.equals("Y")) {
            calculator();
        } else {
            System.out.println("program terminating");
        }
    }
	public static void main(String[] args) {
		    Scanner scanner = new Scanner(System.in);
     System.out.println("Input Problem");
    calculator();
	    
	}
}