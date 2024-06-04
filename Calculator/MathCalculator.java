import java.util.*;
public class MathCalculator {
	static void theCalculator() {
		Scanner scanner = new Scanner(System.in);
		double fvalue, svalue;
		int Mathmethod;

		System.out.println("Select Math Method:\n	1 - Math.pow\n	2 - Math.abs\n	3 - Math.sqrt\n	4 - Math.Round\n	5 - Math.Ceil\n	6 - Math.Floor\n	7 - Math.Min\n	8 - Math.Max");

		try {
			System.out.print("Enter MathMethod: ");
			Mathmethod = scanner.nextInt();
			System.out.print("Enter FirstValue: ");
			fvalue = scanner.nextFloat();
			System.out.print("Enter SecondValue: ");
			svalue = scanner.nextFloat();
			System.out.println("_________________________________________________");

			try {
				switch(Mathmethod) {
					case 1: System.out.println(Math.pow(fvalue,svalue)); break;
					case 2: System.out.println(Math.abs(fvalue)); System.out.println(Math.abs(svalue)); break;
					case 3: System.out.println(Math.sqrt(fvalue));System.out.println(Math.sqrt(svalue)); break;
					case 4: System.out.println(Math.round(fvalue)); System.out.println(Math.round(svalue));break;
					case 5: System.out.println(Math.ceil(fvalue)); System.out.println(Math.ceil(svalue)); break;
					case 6: System.out.println(Math.floor(fvalue)); System.out.println(Math.floor(svalue)); break;
					case 7: System.out.println(Math.min(fvalue,svalue));break;
					case 8: System.out.println(Math.max(fvalue,svalue));break;

					}
				} catch(ArithmeticException e) {
					System.out.println(e);
					} finally {
						System.out.println("_________________________________________________");

						}

			} catch(InputMismatchException e) {
				System.out.println("Interger Only.");
				}

		}
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		boolean choose = true;
		String[] choices = new String[3];
		String[] choices1 = new String[3];
		choices[0] = "Yes";
		choices[1] = "yes";
		choices[2] = "YES";

		choices1[0] = "No";
		choices1[1] = "no";
		choices1[2] = "NO";


		theCalculator();
		do {
			System.out.println("Try Again? Yes/No");
			String choice = scanner.nextLine();
			for(int i = 0; i < choices.length; i++) {
				if(choice.equals(choices[i])) {
					choose = true;
					theCalculator();
					}
				if(choice.equals(choices1[i])) {
					System.out.println("Program ShutDown.....");
					choose = false;
						}
					}
			}
		while(choose == true);

		}
	}