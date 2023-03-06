// factoril program using recursion

import java.util.*;

class FactRec1{
	public static void main(String args[]){
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Factorial no : ");
		int f=sc.nextInt();
		
		System.out.println("Factorial is : "+fact(f));
		
		
	}
	
	public static void main(String args[] ,int a){
		
		System.out.println("Hello");
		
		
	}
	
	
	static int fact(int n){
		
		if (n==1){
			return 1;
		}
		else {
			n=n*fact(n-1);
			
		}
		return n;
	}

}