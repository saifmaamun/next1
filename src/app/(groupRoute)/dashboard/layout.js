import Footer from "@/app/components/shared/footer/Footer";


const GroupPageLayout = ({children}) => {
    return (
        <div>
        <div className="min-h-screen">
            {children}
        </div>
        <Footer/>
        </div>
    );
};

export default GroupPageLayout;