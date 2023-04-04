public class Loops {
    /*public static void main(String[] args) {
        int x = 10;
        int y = 12;
        if(x+y < 10) {
            System.out.println("x + y is less than      10");
        }   else {
            System.out.println("x + y is greater than 20");
        }
    }
}*/
   /* public static void main(String[] args) {
        String address = "Delhi, India";

        if(address.endsWith("India")) {
            if(address.contains("Meerut")) {
                System.out.println("Your city is Meerut");
            }else if(address.contains("Noida")) {
                System.out.println("Your city is Noida");
            }else {
                System.out.println(address.split(",")[0]);
            }
        }else {
            System.out.println("You are not living in India");
        }
    }
}    */

    /*public static void main(String[] args) {
        int num = 2;
        switch (num){
            case 0:
                System.out.println("number is 0");
                break;
            case 1:
                System.out.println("number is 1");
                break;
            default:
                System.out.println(num);
        }
    }
}  */
   /* public static void main(String[] args) {
        int sum = 0;
        for(int j = 1; j<=10; j++) {
            sum = sum + j;
        }
        System.out.println("The sum of first 10 natural numbers is " + sum);
    }
}  */
    /*public static void main(String[] args) {
        int i = 0;
        System.out.println("Printing the list of first 10 even numbers \n");
        while(i<=10) {
            System.out.println(i);
            i = i + 2;
        }
    }
}    */
    /*public static void main(String[] args) {
        int i = 0;
        System.out.println("Printing the list of first 10 even numbers \n");
        do {
            System.out.println(i);
            i = i + 2;
        }while(i<=10);
    }
}    */

//BREAK
/*public static void main(String[] args) {
    a:
    for(int i = 0; i<= 10; i++) {
        b:
        for(int j = 0; j<=15;j++) {
            c:
            for (int k = 0; k<=20; k++) {
                System.out.println(k);
                if(k==5) {
                    break a;
                }
            }
        }

    }
}


}    */

//continue
/*public static void main(String[] args) {
    for(int i = 0; i<= 2; i++) {

        for (int j = i; j<=5; j++) {

            if(j == 4) {
                continue;
            }
            System.out.println(j);
        }
    }
}

    public static void main(String[] args) {
        int i=1;
        do{
            System.out.println(i);
            i++;
        }while(i<=10);
    }
}

    public static void main(String[] args) {
        int i=1;
        while(i<=10){
            if(i==5){
                //using break statement
                i++;
                break;//it will break the loop
            }
            System.out.println(i);
            i++;
        }
    }
}  */